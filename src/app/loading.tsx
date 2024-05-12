import { Spinner } from "@nextui-org/react"


const loading = () => {
    return (
        <div className="flex-1 grid place-content-center place-items-center">
            <Spinner />
        </div>
    )
}

export default loading