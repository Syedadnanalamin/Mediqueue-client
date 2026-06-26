export const TutorsAvaiable = async () => {

    const res = await fetch("http://localhost:8080/");
    return res.json();
}
export const AlltutorsData = async () => {

    const res = await fetch("http://localhost:8080/tutors");
    return res.json();
}

export const specificTutor = async (id) => {


    const res = await fetch(`http://localhost:8080/tutors/details/${id}`);
    return res.json();
}