export default function storageService() {
    return {
        read(key) {
            let item = localStorage.getItem(key);
            let result = [];

            try {
                result = JSON.parse(item);
            } catch (e) {
                console.error(e);
            }

            return result;
        },
        save(key, data) {
            localStorage.setItem(key, JSON.stringify(data));
        }
    };
}
