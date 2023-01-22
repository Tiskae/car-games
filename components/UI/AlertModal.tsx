import React, {useRef} from "react";
import {AlertDialog, Button} from "native-base";

type ModalProps = {
  heading: string;
  body: string;
  onClose: Function;
  onSuccess: Function;
  successBtnLabel?: string;
  show: boolean;
};

const Modal = ({
  heading,
  body,
  onClose,
  onSuccess,
  successBtnLabel,
  show,
}: ModalProps) => {
  const cancelRef = useRef(null);

  return (
    <AlertDialog
      leastDestructiveRef={cancelRef}
      isOpen={show}
      // @ts-ignore
      onClose={onClose}
    >
      <AlertDialog.Content>
        <AlertDialog.CloseButton />
        <AlertDialog.Header>{heading}</AlertDialog.Header>
        <AlertDialog.Body>
          {body}
        </AlertDialog.Body>
        <AlertDialog.Footer>
          <Button.Group>
            <Button
              ref={cancelRef}
              // @ts-ignore
              onPress={onClose}
              variant="unstyled"
              >
              Cancel
            </Button>
            <Button
              // @ts-ignore
              onPress={onSuccess
              }
              colorScheme="green"
            >
              {successBtnLabel || "Okay"}
            </Button>
          </Button.Group>
        </AlertDialog.Footer>
      </AlertDialog.Content>
    </AlertDialog>
  );
};

export default Modal;
