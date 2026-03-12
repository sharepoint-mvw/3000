## [3.03.07] - Unreleased

### Added

- summary: Feature Update: HMI notifications
- details: Added support for on-screen HMI notifications (e.g., bypass due to a manageable fault)
- note: [INTERNAL] Reference ticket: [MVW-892](https://jiracloudweg.atlassian.net/browse/MVW-892)

### Added

- summary: Feature Update: Test mode (Automatic cycle)
- details: Added an automatic cycle function (load test), where the inverter cycles from 0 to the speed reference, allowing for rotation reversal

## [3.03.06] - Unreleased

### Added

- summary: Scalar control for PM motor
- details: The PMSM control menus were updated and new parameters were added to adjust reactive current, open-loop synchronization (speed/wait time), speed-hold behavior, angular delay compensation (A/B coefficients), and the Id/Iq low-pass filter time constant, as well as hysteresis between the OPP/SHE modulation tables
- note: [INTERNAL] Reference ticket: [MVW-785](https://jiracloudweg.atlassian.net/browse/MVW-785)

### Added

- summary: Network Bridge Configuration
- details: Added interface support for configuring the network bridge mode on the HMI ethernet communication ports
- note: Note: This configuration does not affect the AUI board Ethernet ports

### Deprecated

- summary: HMI Serial Communication
- details: The serial communication interface information has been deprecated (Menu/ Config./ Comm. Settings/ Serial)
- note: Note: The RS-485 serial configuration is fixed and exclusively dedicated to communication with the AUI board. The RS-232 interface has no functionality in this product

### Added

- summary: Feature Update: Bypass signaling
- details: Added a visual flag in the HMI header to indicate when cell bypass is active

### Added

- summary: Feature Update: Temperature units
- details: Added a field to select the temperature unit (°C or °F)
- note: Note: The selected unit is stored retentively and applies to all temperature parameters

### Changed

- summary: Improvement: Cell DC bus voltages
- details: Added a moving average filter to the cell DC bus voltage readings to provide a clearer visualization of the bus values
- note: [INTERNAL] Reference ticket: [MVW-863](https://jiracloudweg.atlassian.net/browse/MVW-863)

### Fixed

- summary: Bug Fix: Serial number configuration
- details: Fixed an issue where the serial number was not saved if configured while the motor was running
- note: Note: Without a valid serial number configured, the HMI will prompt for it again upon the next startup

## [3.03.05] - 2026-01-28

### Changed

- summary: Improvement: HMI Bar Graph Scaling
- details: Updated the scaling logic for the Motor Speed bar graph on the HMI home screen to prevent visual clipping
- details: The full-scale limit is now dynamically set to 120% of the greater value between "Rated Motor Speed" and "Maximum Speed Reference"

### Fixed

- summary: Bug Fix: HMI Alarm Help Display
- details: Resolved a layout issue where the alarm help window rendered outside the visible screen area, making it impossible to close and blocking interface navigation
- note: Note: The HMI can be safely restarted at any time, even while the inverter is in operation

### Added

- summary: Feature Update: Output Power via Analog Output
- details: Added option to assign "Output Power" as the signal source for AUI board analog outputs (compatible with Slots X, A, B, C, D, E, F, and G)

### Changed

- summary: Firmware Standardization: HMI Versioning
- details: Harmonized HMI firmware versioning to align with the standard vX.XX.XX format used by other boards
- note: Note: Up to the previous version, the versioning pattern used was vX.XX.XX r XXX

### Changed

- summary: Improvement: USB Backup (Copy Function)
- details: Enhanced the COPY function to support USB backups and parameter comparison
- details: This feature becomes accessible via the HMI menu upon connecting a USB device. Inserting a USB drive automatically triggers a pop-up window with available options
- note: Note: Saving a backup to the USB drive does not require a password. However, restoring a backup from the USB drive to the inverter requires user login

### Added

- summary: Feature Update: CCE Board Temperature Monitoring
- details: Added parameter to display CCE board temperature, distinguishing it from AUI CPU temperature data

## [3.03.04] - 2025-12-12

### Added

- summary: Feature Update: Control Accessory Temperature Protection
- details: Added parameters for configuring overtemperature and undertemperature fault thresholds on control accessories
- note: Note: Associated faults and alarms: A2354, F2355, A2356, and F2357

### Added

- summary: Feature Update: Thermal Relay Status Monitoring
- details: Added parameter displaying the status of temperature monitoring channels for the 6 thermal protection relays
- details: Enables remote monitoring system management of motor temperatures
- note: [INTERNAL] Reference ticket: [MVW-757](https://jiracloudweg.atlassian.net/browse/MVW-757)

### Changed

- summary: Improvement: Thermal Sensor Location Configuration
- details: Introduced bitfield to define the physical installation location of temperature sensors
- note: [INTERNAL] Reference ticket: [MVW-841](https://jiracloudweg.atlassian.net/browse/MVW-841)

### Added

- summary: Feature Update: Transformer Thermal Protection
- details: Added configuration parameters for input transformer thermal protection channels and temperature thresholds
- note: [INTERNAL] Reference ticket: [MVW-757](https://jiracloudweg.atlassian.net/browse/MVW-757)

### Changed

- summary: Default Setting: Phase Loss Protection
- details: Phase loss detection is now enabled by default in the factory configuration

## [3.03.03] - 2025-11-24

### Fixed

- summary: Bug Fix: Negative Temperature Display
- details: Resolved display issue where negative temperature readings from thermal relays were shown incorrectly on HMI and network interfaces
- note: Note: The relay's internal logic and protection mechanisms were functioning correctly; only the display was affected
- note: [INTERNAL] Reference ticket: [MVW-843](https://jiracloudweg.atlassian.net/browse/MVW-843)

### Added

- summary: Feature Update: Synchronized Pre-charge Mode
- details: Added "Grid Synchronization" pre-charge mode. The auxiliary inverter synchronizes with the grid to eliminate inrush current during input transformer connection
- note: [INTERNAL] Reference ticket: [MVW-829](https://jiracloudweg.atlassian.net/browse/MVW-829)

### Changed

- summary: Documentation: Fault F0305 Description
- details: Updated programming manual description for F0305 (Input Unbalance/Phase Loss) for better clarity

### Deprecated

- summary: Deprecation: Fault F0006
- details: Deprecated F0006 (Mains Unbalance/Phase Loss) in favor of newer protection logic

## [3.03.02] - 2025-11-13

### Fixed

- summary: Bug Fix: Parameter Loading (F0100)
- details: Fixed bug causing F0100 (Self-diagnosis failure) when loading default settings or parameter sets
- note: Note: In addition to the failure acting, changes will only take effect on the next startup

### Fixed

- summary: Bug Fix: HMI Parameter Search
- details: Resolved issue preventing user parameter editing via the HMI search function
- note: Note: This issue was isolated to the search function and did not affect menu navigation

### Changed

- summary: Standardization: Thermal Relay Codes
- details: Realigned fault and alarm codes to match MVW01 sequencing, eliminating gaps in the code list

### Changed

- summary: Improvement: Transformer Ratio Limit
- details: Increased maximum input transformer primary-to-auxiliary winding ratio from 50.00 to 90.00

### Added

- summary: Feature Update: Accessory Slot Enforcement
- details: Added configuration to enforce specific accessory slot usage. Mismatches between configured and installed accessories now trigger a slot-specific error

### Fixed

- summary: Documentation: Fault Code Formatting
- details: Standardized manual fault and alarm codes to match HMI format (Fxxxx and Axxxx)

### Added

- summary: Feature Update: Load Parameter Set via DI
- details: Enabled association of digital inputs to the "Load Parameter Set" function (C12.2, C12.3, C12.4)

### Added

- summary: Feature Update: Arc Fault Configuration
- details: Implemented configuration support for Arc Fault protection
- note: [INTERNAL] Reference ticket: [MVW-809](https://jiracloudweg.atlassian.net/browse/MVW-809)

### Added

- summary: New Fault Code: CIB Configuration
- details: Added specific fault code for incorrect CIB configuration
- note: [INTERNAL] Reference ticket: [MVW-809](https://jiracloudweg.atlassian.net/browse/MVW-809)

### Added

- summary: New Fault Code: Test Mode Failure
- details: Added specific fault code for failures occurring during Manageable Fault Tests
- note: [INTERNAL] Reference ticket: [MVW-774](https://jiracloudweg.atlassian.net/browse/MVW-774)

### Fixed

- summary: Bug Fix: AUI Parameter Load
- details: Resolved issues with parameter loading functionality from the AUI board
- note: [INTERNAL] Reference ticket: [MVW-832](https://jiracloudweg.atlassian.net/browse/MVW-832)
