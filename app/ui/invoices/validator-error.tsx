export default function ValidatorError({ errors }: { errors?: string[] }) {
    return (
        <>
            {
                errors &&
                errors.map((error: string) => (
                    <p className="mt-2 text-sm text-red-500" key={error}>{error}</p>
                ))
            }
        </>
    )
}

