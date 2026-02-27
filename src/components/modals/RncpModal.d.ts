import languages from "@locales/languages";
type RncpModalType = {
    language: keyof typeof languages;
    modalTitle: string;
    modalClose: string;
    projectId: number | undefined;
    isVisible: boolean;
    onClose: () => void;
};
declare const RncpModal: ({ language, modalTitle, modalClose, projectId, isVisible, onClose }: RncpModalType) => import("react/jsx-runtime").JSX.Element | null;
export default RncpModal;
