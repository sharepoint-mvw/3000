## [3.03.04] - 2025-12-12

### Added

- summary: C7.5.1 Over/Undertemperature | Configuration
- details: New parameter to configure overtemperature and undertemperature faults for the control accessories
- note: Note: Faults and Alarms related to this protection: A2354, F2355, A2356 and F2357

### Added

- summary: S1.9 Inverter status | Thermal protection relay
- details: New parameter to indicate the status of the temperature monitoring channels of the 6 thermal protection relays
- details: This feature allows for the management of motor temperatures via the remote monitoring system
- note: Reference ticket: [MVW-757](https://jiracloudweg.atlassian.net/browse/MVW-757)

### Changed

- summary: C7.11.14 Thermal management | Thermal protection relay [1,2,3,4,5,6]
- details: New bitfield to set the location where the temperature sensors are installed
- note: Reference ticket: [MVW-841](https://jiracloudweg.atlassian.net/browse/MVW-829)

### Added

- summary: C7.11.1 Thermal management | Transformer
- details: New parameter to enable and configure the channels and temperature values related to the thermal protections of the inverter’s input transformers
- note: Reference ticket: [MVW-757](https://jiracloudweg.atlassian.net/browse/MVW-757)

### Changed

- summary: C7.1.1 Power supply | Protection configuration
- details: The phase loss detection protection is now enabled by default from factory

## [3.03.03] - 2025-11-24

### Fixed

- summary: S2.4.2 Inverter temperatures | Thermal protection relay
- details: Fixes an issue that caused negative temperatures read by the thermal protection relay channels to be displayed incorrectly on HMIG3 and communication networks
- note: Note: The relay's graphical interface displayed the correct temperature and the protections were functioning normally
- note: Reference ticket: [MVW-843](https://jiracloudweg.atlassian.net/browse/MVW-843)

### Added

- summary: C1.9.6 Precharge | Operating mode
- details: New parameter to select the pre-charge method. In this new method, the auxiliary inverter performs the pre-charge in synchronization with the electrical grid, remaining enabled until the connection to the grid is established, eliminating any inrush current in the input transformer
- note: Reference ticket: [MVW-829](https://jiracloudweg.atlassian.net/browse/MVW-829)

### Changed

- summary: Fault and alarm list revision
- details: F0305 (Input unbalance/phase loss) improved programming manual description

### Deprecated

- summary: Fault and alarm list revision
- details: F0006 (Mains unbalance/Phase loss) deprecated

## [3.03.02] - 2025-11-13

### Fixed

- summary: C12.1 Backup | Load parameters
- details: Fixes an issue that caused F0100 (Self-diagnosis failure) when a default settings (load standard) or a set of parameters was loaded
- note: Note: In addition to the failure acting, changes will only take effect on the next startup

### Fixed

- summary: A.1 Application | User parameters
- details: Fixes an issue that prevented editing user parameters via the HMI parameter search function
- note: Note: This issue does not occur when navigating through the menus

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
