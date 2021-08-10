import { ColumnDescription } from "sequelize/types";
import { DialectOptions, FKSpec } from "./dialects/dialect-options";
import { AutoOptions, CaseOption, IndexSpec, LangOption, Relation, TableData, TypeOverrides } from "./types";
/** Generates text from each table in TableData */
export declare class AutoGenerator {
    dialect: DialectOptions;
    tables: {
        [tableName: string]: {
            [fieldName: string]: ColumnDescription;
        };
    };
    foreignKeys: {
        [tableName: string]: {
            [fieldName: string]: FKSpec;
        };
    };
    hasTriggerTables: {
        [tableName: string]: boolean;
    };
    indexes: {
        [tableName: string]: IndexSpec[];
    };
    relations: Relation[];
    space: string[];
    options: {
        indentation?: number;
        spaces?: boolean;
        lang?: LangOption;
        caseModel?: CaseOption;
        caseProp?: CaseOption;
        caseFile?: CaseOption;
        additional?: any;
        schema?: string;
        singularize: boolean;
        typeOverrides?: TypeOverrides;
    };
    constructor(tableData: TableData, dialect: DialectOptions, options: AutoOptions);
    makeHeaderTemplate(): string;
    generateText(): {
        [name: string]: string;
    };
    private addTable;
    private addField;
    private addIndexes;
    /** Get the sequelize type from the Field */
    private getSqType;
    private getTypeScriptPrimaryKeys;
    private getTypeScriptCreationOptionalFields;
    /** Add schema to table so it will match the relation data.  Fixes mysql problem. */
    private addSchemaForRelations;
    private addTypeScriptAssociationMixins;
    private getTypeScriptTableOverrideImports;
    private addTypeScriptFields;
    private getTypeScriptFieldOptional;
    private getTypeScriptType;
    private getTypeScriptFieldType;
    private getEnumValues;
    private isTimestampField;
    private isParanoidField;
    private escapeSpecial;
    /** Quote the name if it is not a valid identifier */
    private quoteName;
    private isNumber;
    private isBoolean;
    private isDate;
    private isString;
    private isArray;
    private isEnum;
    private isJSON;
}