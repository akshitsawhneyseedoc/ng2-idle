/**
 * ng2-idle - A module for responding to idle users in Angular2 applications.
 # @author Mike Grabski <me@mikegrabski.com> (http://mikegrabski.com/)
 * @version v1.0.0-alpha.10
 * @link https://github.com/HackedByChinese/ng2-idle.git#readme
 * @license MIT
 */
import { IdleExpiry } from './idleexpiry';
export declare class SimpleExpiry extends IdleExpiry {
    private lastValue;
    constructor();
    last(value?: Date): Date;
}
