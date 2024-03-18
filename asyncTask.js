//1. Переписать через промисы
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            (Math.random() > 0.5) ? resolve('Data fetched successfully') :
                reject('Could not fetch data. An error occured');
        }, 1000);
    });
}

//2. Построить цепочку промисов
//3. Обработать ошибки в цепочке промисов
fetchData()
    .then(msg => {
        console.log(msg);
    })
    .catch(error => {
        console.error('Error:', error);
    })
    .finally(() =>
        console.log('If data could not been fetched, try again'));

//4. Как дождаться выполнения массива промисов?
const sleep = time => {
    return new Promise(resolve => setTimeout(() => resolve(), time));
}
Promise.all([sleep(2000), sleep(1000)])
    .then(() => console.log('All promises resolved'));

//5. Написать аналог функции array.map работающий асинхронно
function asyncMap(array, сallback) {
    return new Promise((resolve, reject) => {
        const results = [];
        const promises = array.map((item, index) => {
            return сallback(item, index, array)
                .then(result => {
                    results.push(result);
                })
                .catch(reject);
        });
        Promise.all(promises)
            .then(() => {
                resolve(results);
            });
    });
}

const array = [0, 1, 2, 3, 4, 5];

asyncMap(array, async (item) => {
    return item * item;
})
    .then(mappedArray => {
        console.log(mappedArray);
    })
    .catch(error => {
        console.error('Error:', error);
    });