import { useEffect, useState } from 'react'

export const Home = () => {
  const [driverData, setDriverData] = useState([])

  useEffect(() => {
    fetch('https://api.openf1.org/v1/drivers?session_key=9979').then((data) => {
      data.json().then((data) => {
        setDriverData(data)
      })
    })
  }, [])

  return (
    <div className="h-full bg-gray-900 text-gray-100">
      <div className="container mx-auto py-[40px]">
        <table className="table-auto border-collapse border border-gray-700 w-full">
          <thead>
            <tr>
              <th className="border border-gray-700 px-4 py-2">Headshot</th>
              <th className="border border-gray-700 px-4 py-2">Full Name</th>
            </tr>
          </thead>
          <tbody>
            {driverData.map((driver: any) => (
              <tr
                key={
                  driver.driver_number ||
                  `${driver.first_name}-${driver.last_name}`
                }
                className="hover:bg-gray-800"
              >
                <td className="border border-gray-700 px-4 py-2">
                  <img
                    src={driver.headshot_url}
                    alt={`${driver.first_name} ${driver.last_name}`}
                    className="w-16 h-16 object-cover rounded"
                  />
                </td>
                <td className="border border-gray-700 px-4 py-2">
                  {`${driver.first_name} ${driver.last_name}`}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
