//----------------------------------------------------
// Suporte a vários tipos conhecidos
//----------------------------------------------------
const TYPE_MAP = {
  fixed: "type-fixed",
  correction: "type-fixed",
  changed: "type-changed",
  improvement: "type-changed",
  added: "type-added",
  feature: "type-added",
  deprecated: "type-deprecated",
  removed: "type-removed",
  security: "type-security",
};

//----------------------------------------------------
// Função auxiliar para converter links MD em HTML
//----------------------------------------------------
function parseInlineMarkdown(text) {
  if (!text) return "";
  return text.replace(
    /\[([^\]]+)\]\(([^)]+)\)/g,
    '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>'
  );
}

//----------------------------------------------------
// Parser Markdown robusto
//----------------------------------------------------
function parseMarkdown(mdText) {
  const errors = [];
  const lines = mdText.split("\n");

  const versionRegex = /^## \[(.*?)\] - (.*)$/;
  const typeRegex = /^### (.*)$/;
  const urlRegex = /^- url:\s*(.*)$/i;
  const summaryRegex = /^- summary:\s*(.*)$/i;
  const detailsRegex = /^- details:\s*(.*)$/i;
  const noteRegex = /^- note:\s*(.*)$/i;

  let currentVersionBlock = null;
  let currentType = null;
  let currentChange = null;

  const changelog = [];

  function pushVersion() {
    if (!currentVersionBlock) return;
    if (currentVersionBlock.changes.length === 0) {
      errors.push(
        `⚠ Versão ${currentVersionBlock.version} não possui entradas válidas.`
      );
    }
    changelog.push(currentVersionBlock);
  }

  lines.forEach((raw, index) => {
    const line = raw.trim();
    const lineNumber = index + 1;

    if (!line) return;

    const vMatch = versionRegex.exec(line);
    if (vMatch) {
      pushVersion();
      currentVersionBlock = {
        version: vMatch[1],
        release_date: vMatch[2],
        changes: [],
      };
      currentType = null;
      currentChange = null;
      return;
    }

    const urlMatch = urlRegex.exec(line);
    if (urlMatch) {
        if (currentVersionBlock) {
            currentVersionBlock.download_url = urlMatch[1].trim();
        }
        return;
    }

    const tMatch = typeRegex.exec(line);
    if (tMatch) {
      const rawType = tMatch[1].trim().toLowerCase();
      currentType = rawType;

      if (!TYPE_MAP[rawType]) {
        errors.push(
          `⚠ Tipo desconhecido na linha ${lineNumber}: "${rawType}"`
        );
      }

      currentChange = null;
      return;
    }

    const sMatch = summaryRegex.exec(line);
    if (sMatch) {
      if (!currentVersionBlock) {
        errors.push(`⚠ summary sem versão na linha ${lineNumber}`);
        return;
      }
      if (!currentType) {
        errors.push(`⚠ summary sem ### tipo acima (linha ${lineNumber})`);
        return;
      }

      currentChange = {
        type: currentType,
        summary: parseInlineMarkdown(sMatch[1]),
        details: [],
        palliative: [],
      };
      currentVersionBlock.changes.push(currentChange);
      return;
    }

    const dMatch = detailsRegex.exec(line);
    if (dMatch) {
      if (!currentChange) {
        errors.push(`⚠ details sem summary acima (linha ${lineNumber})`);
        return;
      }
      currentChange.details.push(parseInlineMarkdown(dMatch[1]));
      return;
    }

    const nMatch = noteRegex.exec(line);
    if (nMatch) {
      if (!currentChange) {
        errors.push(`⚠ note sem summary acima (linha ${lineNumber})`);
        return;
      }
      currentChange.palliative.push(parseInlineMarkdown(nMatch[1]));
      return;
    }

    errors.push(`⚠ Linha ignorada (inválida): ${line}`);
  });

  pushVersion();

  const lastVersion = changelog[0]?.version || "";

  return {
    project_name: "MVW3000",
    current_version: lastVersion,
    changelog,
    errors,
  };
}

// --- 1. Função de Verificação de Senha ---
const AUTHORIZED_USERS = [
  "admin",
  "julianoz",
  "gilbertoc",
  "gustavolg",
  "e-paraujo",
  "gleissonjf",
  "msari",
  "jamesd"
];

function checkPassword() {
  const inputField = document.getElementById('admin-pass');
  const inputLogin = inputField.value.trim().toLowerCase();

  if (AUTHORIZED_USERS.includes(inputLogin)) {
    document.body.classList.add('admin-mode');
    document.getElementById('login-area').style.display = 'none';
    
    const msgDiv = document.getElementById('admin-msg');
    msgDiv.style.display = 'block';
    msgDiv.textContent = `Engineering Mode Enabled`; 
  } else {
    alert("Unauthorized!");
    inputField.value = ""; 
    inputField.focus();    
  }
}

// -------------------------------------------------------
// Função Auxiliar: Processa tags [INTERNAL]
// -------------------------------------------------------
function processInternal(text) {
  if (!text) return { text: "", isSecret: false };
  
  if (text.includes("[INTERNAL]")) {
    return {
      text: text.replace("[INTERNAL]", "").trim(),
      isSecret: true
    };
  }
  
  return { text: text, isSecret: false };
}

// -------------------------------------------------------
// Função Principal: Renderiza o Changelog na tela
// -------------------------------------------------------
function renderChangelog(data) {
  document.getElementById("project-name").textContent = data.project_name;
  
  const publicVersion = data.changelog.find(v => !v.release_date.toLowerCase().includes("unreleased"));
  document.getElementById("current-version").textContent = publicVersion ? publicVersion.version : data.current_version;

  const c = document.getElementById("changelog-container");
  c.innerHTML = "";

  data.changelog.forEach((v) => {
    const section = document.createElement("div");
    section.className = "version-section";

    const isUnreleased = v.release_date && v.release_date.toLowerCase().includes("unreleased");
    
    if (isUnreleased) {
      section.classList.add("version-unreleased");
    }

    const headerDiv = document.createElement("div");
    headerDiv.className = "version-header";
    const versionTitle = v.download_url 
      ? `<a href="${v.download_url}" target="_blank" style="color: inherit; text-decoration: none;">v${v.version} 🔗</a>`
      : `v${v.version}`;

    headerDiv.innerHTML = `
      <h2>${versionTitle}</h2>
      <span>${v.release_date}</span>
    `;
    section.appendChild(headerDiv);

    v.changes.forEach((ch) => {
      const summaryData = processInternal(ch.summary);
      
      const typeClass = TYPE_MAP[ch.type] || "type-default";
      const div = document.createElement("div");
      div.className = "change-item";

      if (summaryData.isSecret) {
        div.classList.add("secret-item");
      }

      const detailsHTML = ch.details.map((d) => {
        const dData = processInternal(d);
        const secretClass = dData.isSecret ? "secret-item" : "";
        return `<p class="${secretClass}">${dData.text}</p>`;
      }).join("");

      const notesHTML = (ch.palliative && ch.palliative.length > 0)
        ? ch.palliative.map((n) => {
            const nData = processInternal(n);
            const secretClass = nData.isSecret ? "secret-item" : "";
            return `<div class="palliative-note ${secretClass}">${nData.text}</div>`;
          }).join("")
        : "";

      div.innerHTML = `
        <div class="change-type ${typeClass}">${ch.type.toUpperCase()}</div>
        <div style="width: 100%;">
          <strong>${summaryData.text}</strong>
          ${detailsHTML}
          ${notesHTML}
        </div>
      `;

      section.appendChild(div);
    });

    c.appendChild(section);
  });
}

//----------------------------------------------------
// Mostrar erros de validação do MD
//----------------------------------------------------
function renderValidationErrors(errors) {
  const box = document.getElementById("validation-errors");
  if (errors.length === 0) {
    box.innerHTML = "";
    return;
  }
  box.innerHTML = `
    <div class="error-box">
      <h3>⚠ Problemas detectados no Markdown:</h3>
      <ul>
        ${errors.map((e) => `<li>${e}</li>`).join("")}
      </ul>
    </div>
  `;
}

//----------------------------------------------------
// Carregar o MD
//----------------------------------------------------
fetch("CHANGELOG_MVW3000.md")
  .then((r) => r.text())
  .then((text) => {
    const data = parseMarkdown(text);
    renderValidationErrors(data.errors);
    renderChangelog(data);
  })
  .catch((err) => {
    document.getElementById("changelog-container").innerHTML = `
      <div class="error-box">
        ❌ Erro ao carregar o arquivo CHANGELOG_MVW3000.md
      </div>
    `;
    console.error(err);
  });