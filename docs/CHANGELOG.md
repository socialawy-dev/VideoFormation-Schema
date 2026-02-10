# Changelog

All notable changes to the Universal Video Blueprint Schema will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.1.0] - 2026-02-10

### Added
- **Asset Type Specialization**: 9 specialized asset types with enum constraints:
  - ModelAsset (glb, fbx, vrm, usd, obj, blend) with LOD levels and properties
  - AudioAsset (bgm, score, sfx, ambience, voiceover, dialogue) with format and technical specs
  - VfxAsset (particle, simulation, compositing, shader) with intensity/duration controls
  - TextureAsset (image, procedural, video) with channels and tiling parameters
  - EnvironmentAsset (hdri, skybox, procedural, plate) with exposure/rotation controls
  - ShaderAsset (pbr, unlit, toon, custom) with PBR material parameters
  - TextStyleAsset (font_ref, size_px) with color, stroke, and safe margins
  - GraphicsAsset (image, svg, video, mogrt, vector) with rights management
  - CaptionFileAsset (language, format) with ISO language codes and caption formats
- **Confidence Enum**: For estimates and data validation (low, medium, high)
- **RenderInstructions Structure**: Preview and master configurations with post-processing effects
- **AssetRights Reusable Component**: License management with source URLs and attribution
- **Enhanced AssetManifest**: Updated all properties to use specialized asset types
- **Production Sequence Validation**: Complete hierarchical structure (sequences → scenes → shots)
- **Camera Path Support**: Structured camera movement definitions
- **Edit Transitions**: Transition definitions between shots
- **Approvals Structure**: Review and approval workflow support
- **GraphicsEvent Definition**: Complete graphics overlay system
- **Style Guide Structure**: Visual style definitions
- **Stage Setup Structure**: Transform, LightDefinition, ActorInstance, PropInstance
- **VfxEvent Required Fields**: Complete visual effects event system

### Changed
- **AssetManifest References**: Replaced generic AssetEntry with specialized types for all asset categories
- **Schema Validation**: Enhanced type safety with comprehensive enum constraints
- **IDE Support**: Improved autocomplete and validation in development environments

### Fixed
- **JSON Syntax**: Corrected multiple syntax errors during implementation
- **Schema References**: Fixed all $ref paths and definitions
- **Enum Validation**: Ensured all enum arrays are properly structured
- **Template Validation**: Schema correctly rejects placeholder values (pipe-separated)
- **Production Testing**: Validated against real VideoFormation projects

### Security
- **Input Validation**: Enhanced validation prevents injection attacks
- **Schema Integrity**: Comprehensive validation ensures data consistency
