const data = async () => {
    try {
        await getData()
    }
    catch {
        console.log('Error error error!')
    }
}
data()

