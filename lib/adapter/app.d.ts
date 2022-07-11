export function usePage(): {
    props: import("vue").ComputedRef<any>;
    url: import("vue").ComputedRef<any>;
    component: import("vue").ComputedRef<any>;
    version: import("vue").ComputedRef<any>;
};
declare namespace _default {
    const name: string;
    namespace props {
        namespace initialPage {
            const type: ObjectConstructor;
            const required: boolean;
        }
        namespace initialComponent {
            const type_1: ObjectConstructor;
            export { type_1 as type };
            const required_1: boolean;
            export { required_1 as required };
        }
        namespace resolveComponent {
            const type_2: FunctionConstructor;
            export { type_2 as type };
            const required_2: boolean;
            export { required_2 as required };
        }
        namespace titleCallback {
            const type_3: FunctionConstructor;
            export { type_3 as type };
            const required_3: boolean;
            export { required_3 as required };
            function _default(title: any): any;
            export { _default as default };
        }
        namespace onHeadUpdate {
            const type_4: FunctionConstructor;
            export { type_4 as type };
            const required_4: boolean;
            export { required_4 as required };
            function _default_1(): () => void;
            export { _default_1 as default };
        }
    }
    function setup({ initialPage, initialComponent, resolveComponent, titleCallback, onHeadUpdate }: {
        initialPage: any;
        initialComponent: any;
        resolveComponent: any;
        titleCallback: any;
        onHeadUpdate: any;
    }): () => any;
    function setup({ initialPage, initialComponent, resolveComponent, titleCallback, onHeadUpdate }: {
        initialPage: any;
        initialComponent: any;
        resolveComponent: any;
        titleCallback: any;
        onHeadUpdate: any;
    }): () => any;
}
export default _default;
export namespace plugin {
    function install(app: any): void;
    function install(app: any): void;
}
