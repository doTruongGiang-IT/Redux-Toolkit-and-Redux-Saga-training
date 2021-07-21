const API_URL = "https://opentdb.com/api.php?amount=10&type=boolean";

export const fetchQuiz = async () => {
    return await fetch(API_URL)
                .then(res => res.json())
                .then(questions => questions.results)
                .catch(error => Promise.reject(error))
};