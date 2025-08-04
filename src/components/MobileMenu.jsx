export const MobileMenu = ({ isOpen, onClose, navItems }) => {
  return (
    <div className={`md:hidden fixed inset-0 z-30 transition-opacity duration-300 ${
      isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
    }`}>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Menu */}
      <div className={`fixed top-16 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 transform transition-transform duration-300 ${
        isOpen ? 'translate-y-0' : '-translate-y-full'
      }`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={onClose}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-colors duration-200"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
