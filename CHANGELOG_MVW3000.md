## [3.03.04] - 2025-12-12

### Added

- summary: Feature Update: Control Accessory Temperature Protection
- details: Added parameters for configuring overtemperature and undertemperature fault thresholds on control accessories
- note: Note: Associated faults and alarms: A2354, F2355, A2356, and F2357

### Added

- summary: Feature Update: Thermal Relay Status Monitoring
- details: Added parameter displaying the status of temperature monitoring channels for the 6 thermal protection relays
- details: Enables remote monitoring system management of motor temperatures
- note: Reference ticket: [MVW-757](https://jiracloud.weg.net/browse/MVW-757)

### Changed

- summary: Improvement: Thermal Sensor Location Configuration
- details: Introduced bitfield to define the physical installation location of temperature sensors
- note: Reference ticket: [MVW-841](https://jiracloud.weg.net/browse/MVW-841)

### Added

- summary: Feature Update: Transformer Thermal Protection
- details: Added configuration parameters for input transformer thermal protection channels and temperature thresholds
- note: Reference ticket: [MVW-757](https://jiracloud.weg.net/browse/MVW-757)

### Changed

- summary: Default Setting: Phase Loss Protection
- details: Phase loss detection is now enabled by default in the factory configuration

## [3.03.03] - 2025-11-24

### Fixed

- summary: Bug Fix: Negative Temperature Display
- details: Resolved display issue where negative temperature readings from thermal relays were shown incorrectly on HMI and network interfaces
- note: Note: The relay's internal logic and protection mechanisms were functioning correctly; only the display was affected
- note: Reference ticket: [MVW-843](https://jiracloud.weg.net/browse/MVW-843)

### Added

- summary: Feature Update: Synchronized Pre-charge Mode
- details: Added "Grid Synchronization" pre-charge mode. The auxiliary inverter synchronizes with the grid to eliminate inrush current during input transformer connection
- note: Reference ticket: [MVW-829](https://jiracloud.weg.net/browse/MVW-829)

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
- note: Reference ticket: [MVW-809](https://jiracloud.weg.net/browse/MVW-809)

### Added

- summary: New Fault Code: CIB Configuration
- details: Added specific fault code for incorrect CIB configuration
- note: Reference ticket: [MVW-809](https://jiracloud.weg.net/browse/MVW-809)

### Added

- summary: New Fault Code: Test Mode Failure
- details: Added specific fault code for failures occurring during Manageable Fault Tests
- note: Reference ticket: [MVW-774](https://jiracloud.weg.net/browse/MVW-774)

### Fixed

- summary: Bug Fix: AUI Parameter Load
- details: Resolved issues with parameter loading functionality from the AUI board
- note: Reference ticket: [MVW-832](https://jiracloud.weg.net/browse/MVW-832)
