import React, { useCallback, useEffect } from "react";

const ModalUniversal = ({
  isOpen,
  onClose,
  onSubmit,
  body,
  title,
  actionLabel,
  disabled,
  secondaryAction,
  secondaryLabel,
}) => {
  const [showModal, setShowModal] = useState(isOpen);

  // * showing the modal when isOpen set to true.
  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  // * handeling onClose with animation delay of 300ms, when disabled is false
  const handelClose = useCallback(() => {
    if (disabled) {
      return;
    }

    setShowModal(false);
    setTimeout(() => {
      onClose();
    }, 300);
  }, [onClose, disabled]);

  // * handling submition of form
  const handelSubmit = useCallback(() => {
    if (disabled) {
      return;
    }

    onSubmit();
  }, [onSubmit, disabled]);

  // * secondaryAction if their is any one
  const handleSecondaryAction = useCallback(() => {
    if (disabled || !secondaryAction) {
      return;
    }

    secondaryAction();
  }, [secondaryAction, disabled]);

  if (!isOpen) {
    return null;
  }

  return (
    <>
      <div
        className="
          flex
          justify-center
          items-center
          overflow-x-hidden
          overflow-y-auto
          fixed
          inset-0
          z-50
          outline-none
          focus:outline-none
          bg-neutral-600/60
        "
      >
        <div
          className="
            relative
            w-full
            sm:w-80
            mx-auto
            my-auto
            h-full
            sm:h-fit
          "
        >
          {/* content */}
          <div
            className={`
              translate
              duration-300
              h-full
              ${showModal ? "translate-y-0" : "translate-y-full"}
              ${showModal ? "opacity-100" : "opacity-0"}
              `}
          >
            <div
              className="
                
              "
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalUniversal;
