// Generated TypeScript declarations for @videoformation/blueprint-schema
export interface BlueprintValidationResult {
  valid: boolean;
  errors?: Array<{
    keyword: string;
    instancePath: string;
    schemaPath: string;
    params?: Record<string, any>;
    message?: string;
  }>;
}

export interface ValidatorOptions {
  strict?: boolean;
  allowAdditionalProperties?: boolean;
  removeAdditional?: boolean;
}

export declare function validateBlueprint(
  blueprint: any,
  options?: ValidatorOptions
): BlueprintValidationResult;

export declare function getValidator(
  options?: ValidatorOptions
): (blueprint: any) => BlueprintValidationResult;

export declare const schema: any;
