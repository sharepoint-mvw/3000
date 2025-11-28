## [3.03.03] - 2025-11-24

### Fixed

- summary: S2.4.2 Inverter temperatures | Thermal protection relay
- details: Fixes an issue that caused negative temperatures read by the thermal protection relay channels to be displayed incorrectly on HMIG3 and communication networks
- note: The relay's graphical interface displayed the correct temperature and the protections were functioning normally
- note: Reference ticket: [MVW-843](https://jiracloudweg.atlassian.net/browse/MVW-843)

### Added

- summary: C1.9.6 Precharge | Operating mode
- details: Parameter to select the pre-charge method. In this new method, the auxiliary inverter performs the pre-charge in synchronization with the electrical grid, remaining enabled until the connection to the grid is established, eliminating any inrush current in the input transformer
- note: Reference ticket: [MVW-829](https://jiracloudweg.atlassian.net/browse/MVW-829)

### Changed

- summary: Fault and alarm list revision
- details: F0305 (Input unbalance/phase loss) improved description

### Deprecated

- summary: Fault and alarm list revision
- details: F0006 (Mains unbalance/Phase loss) deprecated

## [3.03.02] - 2025-11-13

### Fixed

- summary: C12.1 Backup | Load parameters
- details: Fixes an issue that caused F0100 (Self-diagnosis failure) when a default settings (load standard) or a set of parameters was loaded
- note: In addition to the failure acting, changes will only take effect on the next startup

### Fixed

- summary: A.1 Application | User parameters
- details: Fixes an issue that prevented editing user parameters via the HMI parameter search function
- note: This issue does not occur when navigating through the menus

### Changed

- summary: Thermal protection relay
- details: Relocation of fault and alarm codes was performed, removing an unnecessary gap and leaving all faults in sequential order with codes identical to the MVW01

### Changed

- summary: C13.2.4 Ratio between the primary and the auxiliary of the transformer
- details: The maximum limit of the transformation ratio between the primary voltage and the auxiliary winding of the input transformer increases from 50.00 to 90.00

### Added

- summary: C1.7 General configurations of accessories installed in the MVW
- details: Allows the use of a specific accessory in the slots to be forced; if the accessory is configured but not installed, an error will be displayed according to the configured slot

### Fixed

- summary: Fault and alarm code
- details: All fault and alarm indications in the manual now follow the same formatting used in the HMI (Fxxxx and Axxxx)

### Added

- summary: C12.[2,3,4] Load set [1,2,3] DI
- details: Allows associating a digital input to the load parameter set function

### Added

- summary: Arc fault configuration
- details: Reference ticket: [MVW-809](https://jiracloudweg.atlassian.net/browse/MVW-809)

### Added

- summary: Specific fault code for CIB incorrect configuration
- details: Reference ticket: [MVW-809](https://jiracloudweg.atlassian.net/browse/MVW-809)

### Added

- summary: Specific fault code for failure during Manageable fault test
- details: Reference ticket: [MVW-774](https://jiracloudweg.atlassian.net/browse/MVW-774)

### Fixed

- summary: Parameter load from AUI not working properly
- details: Reference ticket: [MVW-832](https://jiracloudweg.atlassian.net/browse/MVW-832)
