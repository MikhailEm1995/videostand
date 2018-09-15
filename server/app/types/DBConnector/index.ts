export interface IDBConnector {
    connect(): IDBConnector;
    killConnection(): IDBConnector;
}
