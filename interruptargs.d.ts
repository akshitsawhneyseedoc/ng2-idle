/**
 * ng2-idle - A module for responding to idle users in Angular2 applications.
 # @author Mike Grabski <me@mikegrabski.com> (http://mikegrabski.com/)
 * @version v1.0.0-alpha.10
 * @link https://github.com/HackedByChinese/ng2-idle.git#readme
 * @license MIT
 */
import { InterruptSource } from './interruptsource';
export declare class InterruptArgs {
    source: InterruptSource;
    innerArgs: any;
    force: boolean;
    constructor(source: InterruptSource, innerArgs: any, force?: boolean);
}
