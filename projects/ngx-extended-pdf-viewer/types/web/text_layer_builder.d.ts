export type IPDFTextLayerFactory = import("./interfaces").IPDFTextLayerFactory;
export type TextLayerBuilderOptions = {
    /**
     * - The text layer container.
     */
    textLayerDiv: HTMLDivElement;
    /**
     * - The application event bus.
     */
    eventBus: any;
    /**
     * - The page index.
     */
    pageIndex: number;
    /**
     * - The viewport of the text layer.
     */
    viewport: any;
    /**
     * - Optional object that will handle
     * highlighting text from the find controller.
     */
    highlighter: any;
    /**
     * - Option to turn on improved
     * text selection.
     */
    enhanceTextSelection: boolean;
};
/**
 * @implements IPDFTextLayerFactory
 */
export class DefaultTextLayerFactory implements IPDFTextLayerFactory {
    /**
     * @param {HTMLDivElement} textLayerDiv
     * @param {number} pageIndex
     * @param {PageViewport} viewport
     * @param {boolean} enhanceTextSelection
     * @param {EventBus} eventBus
     * @param {TextHighlighter} highlighter
     * @returns {TextLayerBuilder}
     */
    createTextLayerBuilder(textLayerDiv: HTMLDivElement, pageIndex: number, viewport: any, enhanceTextSelection: boolean | undefined, eventBus: any, highlighter: any): TextLayerBuilder;
}
/**
 * @typedef {Object} TextLayerBuilderOptions
 * @property {HTMLDivElement} textLayerDiv - The text layer container.
 * @property {EventBus} eventBus - The application event bus.
 * @property {number} pageIndex - The page index.
 * @property {PageViewport} viewport - The viewport of the text layer.
 * @property {TextHighlighter} highlighter - Optional object that will handle
 *   highlighting text from the find controller.
 * @property {boolean} enhanceTextSelection - Option to turn on improved
 *   text selection.
 */
/**
 * The text layer builder provides text selection functionality for the PDF.
 * It does this by creating overlay divs over the PDF's text. These divs
 * contain text that matches the PDF text they are overlaying.
 */
export class TextLayerBuilder {
    constructor({ textLayerDiv, eventBus, pageIndex, viewport, highlighter, enhanceTextSelection, }: {
        textLayerDiv: any;
        eventBus: any;
        pageIndex: any;
        viewport: any;
        highlighter?: any;
        enhanceTextSelection?: boolean | undefined;
    });
    textLayerDiv: any;
    eventBus: any;
    textContent: any;
    textContentItemsStr: any[];
    textContentStream: any;
    renderingDone: boolean;
    pageNumber: any;
    viewport: any;
    textDivs: any[];
    textLayerRenderTask: any;
    highlighter: any;
    enhanceTextSelection: boolean;
    /**
     * @private
     */
    private _finishRendering;
    /**
     * Renders the text layer.
     *
     * @param {number} [timeout] - Wait for a specified amount of milliseconds
     *                             before rendering.
     */
    render(timeout?: number | undefined): void;
    /**
     * Cancel rendering of the text layer.
     */
    cancel(): void;
    setTextContentStream(readableStream: any): void;
    setTextContent(textContent: any): void;
    /**
     * Improves text selection by adding an additional div where the mouse was
     * clicked. This reduces flickering of the content if the mouse is slowly
     * dragged up or down.
     *
     * @private
     */
    private _bindMouse;
}
