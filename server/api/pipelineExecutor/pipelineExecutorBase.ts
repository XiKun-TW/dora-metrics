export interface IPipelineExecutor {
    authrize: (token: string) => boolean;
}

export class IPipelineExecutor {
    authrize = (token: string) => false;
}