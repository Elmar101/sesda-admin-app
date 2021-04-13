export class StorageService {
    private readonly _storage = sessionStorage;
    
    saveItem(key: string, value: string): void {
        this._storage.setItem(key, value);
    }

    getItem(key: string): string {
        return this._storage.getItem(key) as string; 
    }

    removeItem(key: string): void  {
        this._storage.removeItem(key);
    }

    clearStorage(): void  {
        this._storage.clear();
    }
}


