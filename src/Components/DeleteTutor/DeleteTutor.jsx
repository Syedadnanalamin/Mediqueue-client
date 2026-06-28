
'use client'
import { AlertDialog, Button } from "@heroui/react";
const DeleteTutor = ({ tutorId }) => {

    const MyBookedtutorsDelete = async (teacherId) => {


        const BookedTutorDelete = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/my-booked-sessions/${teacherId}`, {
            method: 'DELETE',

        });
        return BookedTutorDelete.json();


    }



    return (
        <div>
            <AlertDialog>
                <Button variant="danger">Delete Booking</Button>
                <AlertDialog.Backdrop>
                    <AlertDialog.Container>
                        <AlertDialog.Dialog className="sm:max-w-[400px]">
                            <AlertDialog.CloseTrigger />
                            <AlertDialog.Header>
                                <AlertDialog.Icon status="danger" />
                                <AlertDialog.Heading>Delete Booking permanently?</AlertDialog.Heading>
                            </AlertDialog.Header>
                            <AlertDialog.Body>
                                <p>
                                    This will permanently delete <strong>Your Booking</strong> and all of its
                                    data. This action cannot be undone.
                                </p>
                            </AlertDialog.Body>
                            <AlertDialog.Footer>
                                <Button slot="close" variant="tertiary">
                                    Cancel
                                </Button>
                                <Button slot="close" variant="danger" onClick={() => MyBookedtutorsDelete(tutorId)}>
                                    Confirm
                                </Button>
                            </AlertDialog.Footer>
                        </AlertDialog.Dialog>
                    </AlertDialog.Container>
                </AlertDialog.Backdrop>
            </AlertDialog>
        </div>
    );
};

export default DeleteTutor;