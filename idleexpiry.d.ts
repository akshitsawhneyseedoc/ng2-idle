/**
 * ng2-idle - A module for responding to idle users in Angular2 applications.
 # @author Mike Grabski <me@mikegrabski.com> (http://mikegrabski.com/)
 * @version v1.0.0-alpha.10
 * @link https://github.com/HackedByChinese/ng2-idle.git#readme
 * @license MIT
 */
export declare abstract class IdleExpiry {
    protected idValue: any;
    constructor();
    id(value?: any): any;
    abstract last(value?: Date): Date;
    now(): Date;
    isExpired(): boolean;
}
