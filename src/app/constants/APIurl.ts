import { environment } from "src/environments/environment"

export const APIurl={

    authUrl(): string {
        return `${environment.apiUrl}${environment.authPath}/login`
    }  


}