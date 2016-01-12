/* @flow */
import type { KoaType } from "./flow/koa";
import getIsotropy from "isotropy-core";
import reactPlugin from "isotropy-plugin-react";

type Plugin = {
    getDefaults: (app: Object) => Object,
    setup: (appSettings: Object, instance: KoaType, options: PluginOptions) => Promise
};

type Plugins = {
    [key: string]: Plugin
}

type PluginOptions = {
    dir: string,
    port: number,
    graphiql?: boolean
}

type IsotropyOptionsType = {
    dir: string,
    port: number,
    plugins: Plugins,
    defaultInstance: KoaType
};

export type IsotropyResultType = {
    koa: KoaType
};

type IsotropyFnType = (apps: Object, options: IsotropyOptionsType) => Promise<IsotropyResultType>;

const isotropy: IsotropyFnType = getIsotropy({ react: reactPlugin });

export default isotropy;
