import React from 'react'
import Link from 'next/link'
import { BsCheckCircle } from 'react-icons/bs'
import { AiFillYoutube } from 'react-icons/ai'

import { problems } from '@/mockdata/problems'

type ProblemTableProps = {}

const ProblemTable: React.FC<ProblemTableProps> = () => {

  return (
    <tbody className='text-white'>
      {problems.map((doc, ind) => {
        const difficultyColor = doc.difficulty === 'Easy' ? 'text-dark-green-s' : doc.difficulty === 'Medium' ? 'text-yellow-500' : 'text-dark-pink'
        return (
          <tr className={`${ind %2 === 1 ? 'bg-dark-layer-1' : ''}`} key={ind}>
            <th className='px-2 py-4 font-medium whitespace-nowrap text-dark-green-s'>
              <BsCheckCircle fontsize={'18'} width='18'/>
            </th>
            <td className='px-6 py-4'>
              <Link className='hover:text-blue-600 cursor-pointer' href={`/problems/${doc.id}`}>
                {doc.title}
              </Link>
            </td>
            <td className={`px-6 py-4 ${difficultyColor}`}>{doc.difficulty}</td>
            <td className='px-6 py-4'>{doc.category}</td>
            <td className='px-6 py-4'>
              {doc.videoId ? (
                <AiFillYoutube size={'24'} className='cursor-pointer hover:text-red-600'/>
              ) : (
                <p className='text-gray-400'>Coming soon</p>
              )}
            </td>
          </tr>
        )
      })}
    </tbody>
  )
}

export default ProblemTable
