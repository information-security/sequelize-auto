import { FKSpec, TableData } from ".";
import { AutoOptions, CaseOption, LangOption, Relation } from "./types";
/** Writes text into files from TableData.text, and writes init-models */
export declare class AutoWriter {
    tableText: {
        [name: string]: string;
    };
    foreignKeys: {
        [tableName: string]: {
            [fieldName: string]: FKSpec;
        };
    };
    relations: Relation[];
    options: {
        caseFile?: CaseOption;
        caseModel?: CaseOption;
        caseProp?: CaseOption;
        directory: string;
        lang?: LangOption;
        noAlias?: boolean;
        noInitModels?: boolean;
        noWrite?: boolean;
        singularize?: boolean;
    };
    constructor(tableData: TableData, options: AutoOptions);
    write(): Promise<void> | Promise<void[]>;
    private createInitString;
    private createFile;
    /** Create the belongsToMany/belongsTo/hasMany/hasOne association strings */
    private createAssociations;
    private createTsInitString;
    private createES5InitString;
    createESMDInitString(tables: string[], assoc: string): string;
    private createESMInitString;
}