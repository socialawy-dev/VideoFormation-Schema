# VideoFormation Blueprint Examples

This directory contains reference implementations of the VideoFormation Blueprint Schema v1.1. Each example demonstrates a specific video style or technical requirement.

## Available Examples

| File | Style | Complexity | Description |
|------|-------|------------|-------------|
| [1_talking_head.json](./1_talking_head.json) | **Talking Head** | Low | Single character avatar with subtitles. Common for news and social updates. |
| [2_interview.json](./2_interview.json) | **Interview** | Medium | Two-speaker dialogue showing camera switching (shot-reverse-shot). |
| [3_explainer_slides.json](./3_explainer_slides.json) | **Explainer** | Medium | Sequence of static slides with voiceover synchronization and transitions. |
| [4_product_showcase.json](./4_product_showcase.json) | **Product 3D** | High | 3D product visualization with animated camera paths and studio lighting. |
| [5_cinematic_trailer.json](./5_cinematic_trailer.json) | **Trailer** | High | Fast-paced editing, music synchronization, VFX triggers, and color grading. |
| [6_multi_language.json](./6_multi_language.json) | **Localization** | Medium | Setup for multi-language projects including subtitle files and localized dialogue tracks. |
| [minimal.json](./minimal.json) | **Bare Bones** | Low | The absolute minimum valid JSON required to pass the schema. |
| [full.json](./full.json) | **Kitchen Sink** | Very High | A massive file utilizing every single feature available in the schema. |

## Usage

To validate any of these examples against the schema:

```bash
# From project root
npm run validate examples/1_talking_head.json
```

Or copy a file to use as a starting point for your own production:

```bash
cp examples/4_product_showcase.json my-new-ad.json
```