import { h as hydrate } from 'vue';
/**
 *
 * @param app<InertiaApp>
 * @param props<InertiaAppProps>
 * @returns <VNode>
 */
export function h(app, props) {
    // Get the props from component
    let componentProps = props.initialComponent.props;
    // Get props from the page
    let pageProps = props.initialPage.props;
    // Go through the page props
    Object.keys(pageProps).forEach(key => {
        // Define the component prop
        let componentProp = componentProps[key] ?? false;
        // Has a transform property
        if (componentProp && componentProp?.transform) {
            // If it's a class
            if (typeof componentProp.transform === 'function' && /^class\s/.test(Function.prototype.toString.call(componentProp.transform))) {
                pageProps[key] = new componentProp.transform(pageProps[key]);
            }
            // Is function
            else if (componentProp.transform instanceof Function) {
                pageProps[key] = componentProp.transform(pageProps[key]);
            }
            // Is whatever
            else {
                pageProps[key] = componentProp.transform;
            }
        }
    });
    // Hydrate the page props
    props.initialPage.props = { ...props.initialPage.props, ...pageProps };
    // Return the default
    return hydrate(app, props);
}
//# sourceMappingURL=index.js.map