const Transactions = () => {
    return <div className="flex flex-col gap-6">
        <div className="text-xl font-medium">
            Transactions | This Month
        </div>
        <div className="flex gap-4 text-sm">
            <div className="bg-black-200 rounded-2xl text-black-300 py-1.5 px-4">
                Payouts (22)
            </div>
            <div className="bg-blue-700 rounded-2xl text-white-500 py-1.5 px-4">
                Refunds (6)
            </div>
        </div>

    </div>
}

export default Transactions