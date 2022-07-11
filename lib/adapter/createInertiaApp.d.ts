export default function createInertiaApp({ id, resolve, setup, title, page, render }: {
    id?: string | undefined;
    resolve: any;
    setup: any;
    title: any;
    page: any;
    render: any;
}): Promise<{
    head: any[];
    body: any;
} | undefined>;
