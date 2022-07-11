import { h as hydrate, VNode } from 'vue';
import * as Inertia from '@inertiajs/inertia'
import { InertiaApp, InertiaAppProps } from '@inertiajs/inertia-vue3';

/**
 *
 * @param app<InertiaApp>
 * @param props<InertiaAppProps>
 * @returns <VNode>
 */
 export function h(app: InertiaApp, props: InertiaAppProps, children?: any): VNode {

    // Get the props from component
    let componentProps: any = (props.initialComponent as any).props;

    // Get props from the page
    let pageProps: Inertia.Page['props'] = props.initialPage.props;

    // Hydrate the page props
    props.initialPage.props = {...props.initialPage.props, ...transform(componentProps, pageProps)};

    // Return the default
    return hydrate(app, props, children);
}
 
/**
 *
 * @param app<InertiaApp>
 * @param props<InertiaAppProps>
 * @returns <VNode>
 */
 export function h_spa(initialComponent: Object, pageProps: Object, children?: any): VNode {

    // Get the props from component
    let componentProps: any = (initialComponent as any).props;

    // Hydrate the page props
    let props = {...pageProps, ...transform(componentProps, pageProps)};

    // Return the default
    return hydrate(initialComponent, props, children);
}


/**
 *
 * @param componentProps<Object>
 * @param pageProps<Object>
 * @returns <VNode>
 */
 export function transform(componentProps: Object, pageProps: Object): Object {

    // Go through the page props
    Object.keys(pageProps).forEach(key => {

        // Define the component prop
        let componentProp = componentProps && componentProps.hasOwnProperty(key) ? componentProps[key] : false;

        // Has a transform property
        if(componentProp && componentProp?.transform) {

            // If it's a class
            if(typeof componentProp.transform === 'function' && /^class\s/.test(Function.prototype.toString.call(componentProp.transform))) {
                pageProps[key] = new componentProp.transform(pageProps[key]);
            }

            // Is function
            else if (componentProp.transform instanceof Function) {
                pageProps[key] = componentProp.transform(pageProps[key]);
            }

            // Is whatever
            else  {
                pageProps[key] = componentProp.transform;
            }
        }
    });

    // Return the page props
    return pageProps;
}