// @videoformation/blueprint-schema validation utilities
import Ajv from 'ajv';
import addFormats from 'ajv-formats';
import schema from './blueprint.schema.js';

// Configure AJV
const ajv = new Ajv({
  allErrors: true,
  verbose: true,
  strict: false,
  allowUnionTypes: true
});

addFormats(ajv);

// Remove $schema reference to avoid AJV issues
const cleanSchema = { ...schema };
delete cleanSchema['$schema'];

// Compile validator
const validate = ajv.compile(cleanSchema);

/**
 * Validate a VideoFormation blueprint
 * @param {any} blueprint - Blueprint object to validate
 * @param {ValidatorOptions} options - Validation options
 * @returns {BlueprintValidationResult} Validation result
 */
export function validateBlueprint(blueprint, options = {}) {
  const {
    strict = false,
    allowAdditionalProperties = true,
    removeAdditional = false
  } = options;

  // Configure AJV options
  ajv.options = {
    ...ajv.options,
    strict,
    allowAdditionalProperties,
    removeAdditional
  };

  const valid = validate(blueprint);
  
  return {
    valid,
    errors: valid ? undefined : validate.errors
  };
}

/**
 * Get a configured validator function
 * @param {ValidatorOptions} options - Validator configuration
 * @returns {Function} Validator function
 */
export function getValidator(options = {}) {
  const {
    strict = false,
    allowAdditionalProperties = true,
    removeAdditional = false
  } = options;

  const ajv = new Ajv({
    allErrors: true,
    verbose: true,
    strict,
    allowAdditionalProperties,
    removeAdditional,
    allowUnionTypes: true
  });

  addFormats(ajv);
  return ajv.compile(schema);
}

/**
 * Export the raw schema
 */
export { schema as blueprintSchema };

// Default export
export default {
  validateBlueprint,
  getValidator,
  schema
};
