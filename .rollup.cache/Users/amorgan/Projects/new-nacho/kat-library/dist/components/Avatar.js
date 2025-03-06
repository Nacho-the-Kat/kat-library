import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { UserCircleIcon } from "@heroicons/react/24/outline";
const Avatar = ({ imageUrl }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleOpenModal = () => {
        setIsModalOpen(true);
    };
    const handleCloseModal = () => {
        setIsModalOpen(false);
    };
    return (_jsxs("span", { children: [_jsx("div", { className: "w-12 h-12 rounded-full overflow-hidden cursor-pointer border border-gray-300 dark:border-gray-700", onClick: handleOpenModal, children: imageUrl ? (_jsx("img", { src: imageUrl, alt: "Avatar", className: "w-full h-full object-cover" })) : (_jsx(UserCircleIcon, { className: "w-full h-full text-gray-400" })) }), isModalOpen && (_jsx("div", { className: "fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50", onClick: handleCloseModal, children: _jsx("div", { className: "p-2 bg-white rounded-lg shadow-lg", children: imageUrl ? (_jsx("img", { src: imageUrl, alt: "Avatar Large", className: "w-64 h-64 object-cover rounded-lg" })) : (_jsx(UserCircleIcon, { className: "w-64 h-64 text-gray-400" })) }) }))] }));
};
export default Avatar;
//# sourceMappingURL=Avatar.js.map