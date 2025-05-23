'use client'

import type { ColumnDef } from '@tanstack/react-table'

import { MoreHorizontal, ArrowUpDown } from 'lucide-react'

import { Button } from 'components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  
} from 'components/ui/dropdown-menu'

import toast from 'react-hot-toast'
import { httpsService } from 'services/https.service'
export type User ={
  id: number;
  name: string;
  email: string;
  phone: string;
}

export const columns = (refreshData: () => void): ColumnDef<User>[] => [
  {
    accessorKey: 'no',
    header: ({ column }) => {
      return (
        <Button
        className='text-white'
          variant='ghost'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          #
          <ArrowUpDown className='ml-2 h-4 w-4' />
        </Button>
      )
    }
  },
  {
    accessorKey: 'name',
    header: ({ column }) => {
      return (
        <Button
        className='text-white'
          variant='ghost'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          User Name
          <ArrowUpDown className='ml-2 h-4 w-4' />
        </Button>
      )
    }
  },
  {
    accessorKey: 'email',
    header: ({ column }) => {
      return (
        <Button
        className='text-white'
          variant='ghost'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Email
          <ArrowUpDown className='ml-2 h-4 w-4' />
        </Button>
      )
    }
  },
  {
    accessorKey: 'phone',
    header: ({ column }) => {
      return (
        <Button
        className='text-white'
          variant='ghost'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Phone
          <ArrowUpDown className='ml-2 h-4 w-4' />
        </Button>
      )
    }
  },
  {
    accessorKey: 'totalPurchsesAmount',
    header: ({ column }) => {
      return (
        <Button
        className='text-white'
          variant='ghost'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Total Purchase Amt
          <ArrowUpDown className='ml-2 h-4 w-4' />
        </Button>
      )
    }
  },
  {
    accessorKey: 'totalWithdrawalAmount',
    header: ({ column }) => {
      return (
        <Button
        className='text-white'
          variant='ghost'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Withdrawal request Amt
          <ArrowUpDown className='ml-2 h-4 w-4' />
        </Button>
      )
    }
  },
  {
    accessorKey: 'totalBots',
    header: ({ column }) => {
      return (
        <Button
        className='text-white'
          variant='ghost'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Total Created Bots
          <ArrowUpDown className='ml-2 h-4 w-4' />
        </Button>
      )
    }
  },
 
  
  {
    accessorKey: 'totalEarned',
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Total Earned
          <ArrowUpDown className='ml-2 h-4 w-4' />
        </Button>
      );
    },
    cell: ({ row }) => {
     
      const price = row.getValue('totalEarned') as number;
      const formattedPrice = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(price);
      
      return <span>{formattedPrice}</span>;
    }
  },
  {
    accessorKey: 'availableBalance',
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
         Available Ballance
          <ArrowUpDown className='ml-2 h-4 w-4' />
        </Button>
      );
    },
    cell: ({ row }) => {
     
      const price = row.getValue('availableBalance') as number;
      const formattedPrice = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(price);
      
      return <span>{formattedPrice}</span>;
    }
  },
 /*  {
    accessorKey: 'isActive',
    header: ({ column }) => (
      <Button
        className="text-white"
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
      >
        Active
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => {
      const isActive = row.getValue('isActive') as boolean; // Cast the value as boolean
      return (
        <button
          className={`py-1 px-2 rounded text-white ${
            isActive ? 'bg-green-500' : 'bg-red-500'
          }`}
        >
          {isActive ? 'True' : 'False'}
        </button>
      );
    },
  }, */
  /* {
    accessorKey: 'paymentOptionName',
    header: ({ column }) => (
      <Button
        className="text-white"
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
      >
        Payment Option
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => {
      const paymentOptionName = row.getValue('paymentOptionName') as string; // Cast the value as boolean
      return (
        <button
          className={`py-1 px-2 rounded text-white ${
            paymentOptionName ? 'bg-green-500' : 'bg-blue-500'
          }`}
        >
          {paymentOptionName ? 'MPESA' : 'PAYPAL'}
        </button>
      );
    },
  }, */

  

  /* {
    accessorKey: 'createdAt',
    header: 'Created At',
    cell: ({ row }) => {
      const date = new Date(row.getValue('createdAt'))
      const formatted = date.toLocaleDateString()
      return <div className='font-medium'>{formatted}</div>
    }
  }, */
 /*  {
    id: 'actions',
    cell: ({ row }) => {
      const bot = row.original

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant='ghost' className='h-8 w-8 p-0'>
              <span className='sr-only text-black'>Open menu</span>
              <MoreHorizontal className='h-4 w-4' />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align='end' className='bg-white'>
            <DropdownMenuLabel className='text-black'>Actions</DropdownMenuLabel>
            <DropdownMenuItem
  className="text-black cursor-pointer"
  onClick={async () => {
    try {
      const model = { id: bot.id, isActive: !bot.isActive }; // Toggle publish state
      const service = new httpsService();
      const results = await service.post(model, "bots/publish-bot", null);

      if (results?.response?.code === 200) {
        toast.success(
          bot.isActive
            ? "Bot successfully unpublished."
            : "Bot successfully published."
        );
        refreshData();
        // Optionally refresh the data or update the bot's state
      } else {
        toast.error("Failed to update bot status.");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("An error occurred.");
    }
  }}
>
  {bot.isActive ? "Unpublish Bot" : "Publish Bot"}
</DropdownMenuItem>

            <DropdownMenuSeparator />
            <DropdownMenuItem className='text-black cursor-pointer'>View customer</DropdownMenuItem>
            <DropdownMenuItem className='text-black cursor-pointer'>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    }
  } */
]
