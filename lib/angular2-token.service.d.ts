import { CanActivate } from '@angular/router';
import { Http, Response, RequestOptions } from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/share';
import { UserData, AuthData, Angular2TokenOptions } from './angular2-token.model';
export declare class Angular2TokenService implements CanActivate {
    protected _http: Http;
    protected _activatedRoute: ActivatedRoute;
    protected _router: Router;
    readonly currentUserType: string;
    currentUserData: UserData;
    readonly currentAuthData: AuthData;
    private _options;
    private _currentUserType;
    private _currentAuthData;
    private _currentUserData;
    constructor(_http: Http, _activatedRoute: ActivatedRoute, _router: Router);
    userSignedIn(): boolean;
    canActivate(): boolean;
    init(options?: Angular2TokenOptions): void;
    registerAccount(email: string, password: string, passwordConfirmation: string, userType?: string): Observable<Response>;
    deleteAccount(): Observable<Response>;
    signIn(email: string, password: string, userType?: string): Observable<Response>;
    signInOAuth(oAuthType: string): void;
    signOut(): Observable<Response>;
    validateToken(): Observable<Response>;
    updatePassword(password: string, passwordConfirmation: string, currentPassword?: string, userType?: string): Observable<Response>;
    resetPassword(email: string, userType?: string): Observable<Response>;
    get(path: string): Observable<Response>;
    post(path: string, data: any): Observable<Response>;
    put(path: string, data: any): Observable<Response>;
    delete(path: string): Observable<Response>;
    patch(path: string, data: any): Observable<Response>;
    head(path: string): Observable<Response>;
    options(path: string): Observable<Response>;
    sendHttpRequest(requestOptions: RequestOptions): Observable<Response>;
    protected _handleResponse(response: Observable<Response>): void;
    protected _parseAuthHeadersFromResponse(data: any): void;
    private _getAuthDataFromStorage();
    private _getAuthDataFromParams();
    private _setAuthData(authData);
    private _checkIfComplete(authData);
    private _checkIfNewer(authData);
    private _tryLoadAuthData();
    private _getUserTypeByName(name);
    private _constructUserPath();
    private _constructApiPath();
}
