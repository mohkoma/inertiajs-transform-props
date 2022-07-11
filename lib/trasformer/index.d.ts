import { VNode } from 'vue';
import { InertiaApp, InertiaAppProps } from '@inertiajs/inertia-vue3';
/**
 *
 * @param app<InertiaApp>
 * @param props<InertiaAppProps>
 * @returns <VNode>
 */
export declare function h(app: InertiaApp, props: InertiaAppProps, children?: any): VNode;
/**
 *
 * @param app<InertiaApp>
 * @param props<InertiaAppProps>
 * @returns <VNode>
 */
export declare function h_spa(initialComponent: Object, pageProps: Object, children?: any): VNode;
/**
 *
 * @param componentProps<Object>
 * @param pageProps<Object>
 * @returns <VNode>
 */
export declare function transform(componentProps: Object, pageProps: Object): Object;
