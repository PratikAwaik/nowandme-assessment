interface ModalProps {
  show: boolean;
  children: React.ReactNode;
}

export default function Modal({ show, children }: ModalProps) {
  return (
    <div
      className={`relative z-50 transition-all ease-linear duration-300 delay-75 ${
        show
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      {/* <!--
        Background backdrop, show/hide based on modal state.
    
        Entering: "ease-out duration-300"
          From: "opacity-0"
          To: "opacity-100"
        Leaving: "ease-in duration-200"
          From: "opacity-100"
          To: "opacity-0"
      --> */}
      <div className="fixed inset-0 bg-opacity-50 bg-theme-black-700 backdrop-blur-xs transition-all"></div>

      <div className="fixed inset-0 z-50 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
          {/* Modal panel, show/hide based on modal state.
    
            Entering: "ease-out duration-300"
              From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              To: "opacity-100 translate-y-0 sm:scale-100"
            Leaving: "ease-in duration-200"
              From: "opacity-100 translate-y-0 sm:scale-100"
              To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" */}
          <div className="relative transform overflow-hidden rounded text-left shadow-xl transition-all sm:my-8 w-fit">
            <div>{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
