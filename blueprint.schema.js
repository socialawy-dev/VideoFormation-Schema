// JSON Schema for VideoFormation
export default {
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "$id": "https://videoformation.dev/schemas/blueprint/v1.1.0.json",
  "title": "Universal Video Blueprint",
  "description": "JSON-driven video production specification format for videoformation pipeline.",
  "type": "object",
  "required": [
    "project_metadata",
    "global_settings",
    "production_sequence"
  ],
  "properties": {
    "$schema": {
      "type": "string",
      "format": "uri",
      "description": "URI reference to this schema"
    },
    "project_metadata": {
      "$ref": "#/$defs/ProjectMetadata"
    },
    "global_settings": {
      "$ref": "#/$defs/GlobalSettings"
    },
    "localization": {
      "$ref": "#/$defs/Localization"
    },
    "rights_and_credits": {
      "$ref": "#/$defs/RightsAndCredits"
    },
    "production_tracking_light": {
      "$ref": "#/$defs/ProductionTracking"
    },
    "asset_manifest": {
      "$ref": "#/$defs/AssetManifest"
    },
    "delivery_profiles": {
      "type": "array",
      "items": {
        "$ref": "#/$defs/DeliveryProfile"
      }
    },
    "production_sequence": {
      "$ref": "#/$defs/ProductionSequence"
    },
    "render_instructions": {
      "$ref": "#/$defs/RenderInstructions"
    },
    "render_delivery_notes": {
      "$ref": "#/$defs/RenderDeliveryNotes"
    }
  },
  "$defs": {
    "ProjectMetadata": {
      "type": "object",
      "required": [
        "project_id",
        "title",
        "content_type"
      ],
      "properties": {
        "system_codename": {
          "type": "string",
          "default": "videoformation"
        },
        "project_id": {
          "type": "string",
          "pattern": "^[A-Za-z0-9_-]+$",
          "description": "Unique project identifier (Alphanumeric, underscore, dash)"
        },
        "title": {
          "type": "string"
        },
        "description": {
          "type": "string"
        },
        "content_type": {
          "$ref": "#/$defs/ContentType"
        },
        "created_date": {
          "type": "string",
          "pattern": "^\\d{4}-\\d{2}-\\d{2}$"
        },
        "owner": {
          "type": "string"
        },
        "versioning": {
          "type": "object",
          "properties": {
            "blueprint_version": {
              "type": "string"
            },
            "schema_versioning": {
              "type": "object",
              "properties": {
                "blueprint_schema": {
                  "type": "string"
                },
                "otio_compatibility": {
                  "type": "string"
                },
                "upgrade_path": {
                  "type": "array",
                  "items": {
                    "type": "string"
                  }
                }
              }
            },
            "project_version": {
              "type": "string"
            },
            "change_log": {
              "type": "array",
              "items": {
                "type": "object",
                "properties": {
                  "date": {
                    "type": "string"
                  },
                  "author": {
                    "type": "string"
                  },
                  "summary": {
                    "type": "string"
                  }
                }
              }
            }
          }
        }
      }
    },
    "ContentType": {
      "type": "string",
      "enum": [
        "shortfilm",
        "musicvideo",
        "documentary",
        "ad",
        "social",
        "other"
      ]
    },
    "GlobalSettings": {
      "type": "object",
      "required": [
        "fps",
        "resolution_master"
      ],
      "properties": {
        "timebase": {
          "type": "string",
          "default": "timecode"
        },
        "fps": {
          "type": "integer",
          "minimum": 1
        },
        "resolution_master": {
          "type": "object",
          "required": [
            "width",
            "height"
          ],
          "properties": {
            "width": {
              "type": "integer"
            },
            "height": {
              "type": "integer"
            }
          }
        },
        "pixel_aspect_ratio": {
          "type": "string",
          "default": "1.0"
        },
        "color_pipeline": {
          "type": "object",
          "properties": {
            "working_space": {
              "type": "string"
            },
            "delivery_space_default": {
              "type": "string"
            },
            "lut_default_ref": {
              "type": "string"
            }
          }
        },
        "editorial_policy": {
          "type": "object",
          "properties": {
            "default_handles_frames": {
              "type": "integer"
            },
            "proxy_workflow": {
              "type": "object",
              "properties": {
                "enabled": {
                  "type": "boolean"
                },
                "format": {
                  "type": "string"
                },
                "suffix": {
                  "type": "string"
                }
              }
            }
          }
        },
        "hardware_constraints": {
          "type": "object",
          "properties": {
            "max_poly_count_per_asset": {
              "type": "integer"
            },
            "max_texture_resolution": {
              "type": "integer"
            },
            "max_realtime_lights": {
              "type": "integer"
            },
            "simulation_policy": {
              "type": "string"
            }
          }
        },
        "audio_defaults": {
          "type": "object",
          "properties": {
            "sample_rate_hz": {
              "type": "integer"
            },
            "bit_depth": {
              "type": "integer"
            },
            "mix_target": {
              "type": "string"
            },
            "loudness_targets": {
              "type": "object",
              "properties": {
                "integrated_lufs": {
                  "type": "number"
                },
                "true_peak_dbtp": {
                  "type": "number"
                }
              }
            }
          }
        },
        "naming_conventions": {
          "type": "object",
          "properties": {
            "sequence_id_format": {
              "type": "string"
            },
            "scene_id_format": {
              "type": "string"
            },
            "shot_id_format": {
              "type": "string"
            },
            "full_shot_ref_format": {
              "type": "string"
            },
            "filename_pattern": {
              "type": "string"
            },
            "example": {
              "type": "string"
            }
          }
        }
      }
    },
    "Localization": {
      "type": "object",
      "properties": {
        "default_language": {
          "type": "string"
        },
        "supported_languages": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "text_style_refs": {
          "type": "object",
          "properties": {
            "captions_style_ref": {
              "type": "string"
            },
            "on_screen_text_style_ref": {
              "type": "string"
            }
          }
        }
      }
    },
    "RightsAndCredits": {
      "type": "object",
      "properties": {
        "copyright_notice": {
          "type": "string"
        },
        "music_cue_sheet_hint": {
          "type": "string"
        },
        "asset_rights_overrides": {
          "type": "array"
        }
      }
    },
    "ProductionTracking": {
      "type": "object",
      "properties": {
        "status": {
          "type": "string",
          "enum": [
            "draft",
            "in_progress",
            "review",
            "approved",
            "locked"
          ]
        },
        "priority": {
          "type": "string",
          "enum": [
            "low",
            "normal",
            "high"
          ]
        },
        "review": {
          "type": "object",
          "properties": {
            "reviewers": {
              "type": "array",
              "items": {
                "type": "string"
              }
            },
            "last_review_date": {
              "type": "string"
            },
            "notes": {
              "type": "array",
              "items": {
                "type": "string"
              }
            }
          }
        },
        "approvals": {
          "type": "array"
        }
      }
    },
    "AssetManifest": {
      "type": "object",
      "properties": {
        "environments": {
          "type": "array",
          "items": {
            "$ref": "#/$defs/AssetEntry"
          }
        },
        "locations": {
          "type": "array",
          "items": {
            "$ref": "#/$defs/AssetEntry"
          }
        },
        "characters": {
          "type": "array",
          "items": {
            "$ref": "#/$defs/AssetEntry"
          }
        },
        "props": {
          "type": "array",
          "items": {
            "$ref": "#/$defs/AssetEntry"
          }
        },
        "models": {
          "type": "array",
          "items": {
            "$ref": "#/$defs/AssetEntry"
          }
        },
        "textures": {
          "type": "array",
          "items": {
            "$ref": "#/$defs/AssetEntry"
          }
        },
        "shaders": {
          "type": "array",
          "items": {
            "$ref": "#/$defs/AssetEntry"
          }
        },
        "fonts": {
          "type": "array",
          "items": {
            "$ref": "#/$defs/AssetEntry"
          }
        },
        "text_styles": {
          "type": "array",
          "items": {
            "$ref": "#/$defs/AssetEntry"
          }
        },
        "luts": {
          "type": "array",
          "items": {
            "$ref": "#/$defs/AssetEntry"
          }
        },
        "audio": {
          "type": "array",
          "items": {
            "$ref": "#/$defs/AssetEntry"
          }
        },
        "caption_files": {
          "type": "array",
          "items": {
            "$ref": "#/$defs/AssetEntry"
          }
        },
        "graphics": {
          "type": "array",
          "items": {
            "$ref": "#/$defs/AssetEntry"
          }
        },
        "vfx": {
          "type": "array",
          "items": {
            "$ref": "#/$defs/AssetEntry"
          }
        }
      }
    },
    "AssetEntry": {
      "type": "object",
      "required": [
        "id"
      ],
      "properties": {
        "id": {
          "type": "string"
        },
        "type": {
          "type": "string"
        },
        "source": {
          "type": "string"
        },
        "notes": {
          "type": "string"
        },
        "properties": {
          "type": "object"
        },
        "rights": {
          "type": "object"
        },
        "sha256": {
          "type": "string",
          "description": "SHA256 checksum for media verification"
        }
      },
      "additionalProperties": true
    },
    "DeliveryProfile": {
      "type": "object",
      "required": [
        "id",
        "resolution",
        "fps"
      ],
      "properties": {
        "id": {
          "type": "string"
        },
        "purpose": {
          "type": "string"
        },
        "resolution": {
          "$ref": "#/$defs/Resolution"
        },
        "fps": {
          "type": "integer"
        },
        "container": {
          "type": "string"
        },
        "video_codec": {
          "type": "string"
        },
        "audio_codec": {
          "type": "string"
        },
        "color_space": {
          "type": "string"
        },
        "naming_template": {
          "type": "string"
        }
      }
    },
    "ProductionSequence": {
      "type": "object",
      "required": [
        "sequences"
      ],
      "properties": {
        "sequences": {
          "type": "array",
          "items": {
            "$ref": "#/$defs/Sequence"
          }
        }
      }
    },
    "Sequence": {
      "type": "object",
      "required": [
        "sequence_id",
        "scenes"
      ],
      "properties": {
        "sequence_id": {
          "type": "string",
          "pattern": "^SEQ\\d+$"
        },
        "slug": {
          "type": "string"
        },
        "description": {
          "type": "string"
        },
        "style_guide": {
          "type": "object"
        },
        "scenes": {
          "type": "array",
          "items": {
            "$ref": "#/$defs/Scene"
          }
        }
      }
    },
    "Scene": {
      "type": "object",
      "required": [
        "scene_id",
        "shots"
      ],
      "properties": {
        "scene_id": {
          "type": "string",
          "pattern": "^S\\d+$"
        },
        "slug": {
          "type": "string"
        },
        "location_ref": {
          "type": "string"
        },
        "estimated_duration_seconds": {
          "type": "number"
        },
        "confidence": {
          "type": "string"
        },
        "stage_setup": {
          "type": "object"
        },
        "shots": {
          "type": "array",
          "items": {
            "$ref": "#/$defs/Shot"
          }
        },
        "captions": {
          "type": "object"
        }
      }
    },
    "Shot": {
      "type": "object",
      "required": [
        "shot_id",
        "duration_seconds"
      ],
      "properties": {
        "shot_id": {
          "type": "string",
          "pattern": "^SEQ\\d+\\.S\\d+\\.SH\\d+$"
        },
        "slug": {
          "type": "string"
        },
        "duration_seconds": {
          "type": "number",
          "minimum": 0
        },
        "camera": {
          "$ref": "#/$defs/Camera"
        },
        "edit": {
          "type": "object"
        },
        "action_notes": {
          "type": "string"
        },
        "markers": {
          "type": "array",
          "items": {
            "$ref": "#/$defs/Marker"
          }
        },
        "dialogue": {
          "type": "array",
          "items": {
            "$ref": "#/$defs/DialogueLine"
          }
        },
        "on_screen_text": {
          "type": "array",
          "items": {
            "$ref": "#/$defs/OnScreenText"
          }
        },
        "audio_timeline": {
          "type": "array",
          "items": {
            "$ref": "#/$defs/AudioEvent"
          }
        },
        "animation_timeline": {
          "type": "array"
        },
        "vfx_timeline": {
          "type": "array",
          "items": {
            "$ref": "#/$defs/VfxEvent"
          }
        },
        "color_grading": {
          "type": "object"
        },
        "asset_dependencies": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "description": "List of asset IDs this shot depends on for rendering"
        }
      }
    },
    "Camera": {
      "type": "object",
      "properties": {
        "id": {
          "type": "string"
        },
        "type": {
          "type": "string"
        },
        "lens_mm": {
          "type": "number"
        },
        "path": {
          "type": "array"
        },
        "depth_of_field": {
          "type": "object",
          "properties": {
            "enabled": {
              "type": "boolean"
            },
            "focal_distance": {
              "type": "number"
            },
            "aperture": {
              "type": "number"
            }
          }
        }
      }
    },
    "Marker": {
      "type": "object",
      "required": [
        "name"
      ],
      "properties": {
        "name": {
          "type": "string"
        },
        "marked_range": {
          "type": "object",
          "properties": {
            "start": {
              "type": "number"
            },
            "duration": {
              "type": "number"
            }
          }
        },
        "color": {
          "type": "string"
        },
        "comment": {
          "type": "string"
        }
      }
    },
    "DialogueLine": {
      "type": "object",
      "properties": {
        "timestamp": {
          "type": "number"
        },
        "speaker_ref": {
          "type": "string"
        },
        "mode": {
          "type": "string",
          "enum": [
            "vo",
            "dialogue",
            "off"
          ]
        },
        "text": {
          "type": "string"
        },
        "language": {
          "type": "string"
        }
      }
    },
    "OnScreenText": {
      "type": "object",
      "properties": {
        "start": {
          "type": "number"
        },
        "end": {
          "type": "number"
        },
        "text": {
          "type": "string"
        },
        "style_ref": {
          "type": "string"
        }
      }
    },
    "AudioEvent": {
      "type": "object",
      "required": [
        "timestamp",
        "asset_ref"
      ],
      "properties": {
        "timestamp": {
          "type": "number"
        },
        "event_type": {
          "type": "string"
        },
        "asset_ref": {
          "type": "string"
        },
        "params": {
          "type": "object"
        }
      }
    },
    "VfxEvent": {
      "type": "object",
      "properties": {
        "timestamp": {
          "type": "number"
        },
        "event_type": {
          "type": "string"
        },
        "asset_ref": {
          "type": "string"
        },
        "params": {
          "type": "object"
        }
      }
    },
    "RenderInstructions": {
      "type": "object",
      "properties": {
        "preview": {
          "type": "object"
        },
        "master": {
          "type": "object"
        }
      }
    },
    "RenderDeliveryNotes": {
      "type": "object",
      "properties": {
        "notes": {
          "type": "string"
        },
        "confidence": {
          "type": "string"
        }
      }
    },
    "Resolution": {
      "type": "object",
      "required": [
        "width",
        "height"
      ],
      "properties": {
        "width": {
          "type": "integer"
        },
        "height": {
          "type": "integer"
        }
      }
    }
  }
};
