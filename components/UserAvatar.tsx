import { User } from '@prisma/client'
import { AvatarProps } from '@radix-ui/react-avatar'


import { Avatar, AvatarFallback } from '@/components/ui/Avatar'
import Image from 'next/image'
import { Icons } from './ui/Icons'

interface UserAvatarProps extends AvatarProps {
  user: Pick<User, 'image' | 'name'>
}

export function UserAvatar({ user, ...props }: UserAvatarProps) {
  return (
    <Avatar {...props}>
      {user.image ? (
        <div className='relative aspect-square h-full w-full'>
          <Image
            fill
            src={user.image}
            alt='profile picture'
            referrerPolicy='no-referrer'
          />
        </div>
      ) : (
        <AvatarFallback>
          <Image src="/defaultpfp.png" width={32}
      height={32} alt="Profile picture"/>
          
        </AvatarFallback>
      )}
    </Avatar>
  )
}