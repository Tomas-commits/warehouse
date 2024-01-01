import { defineStore } from 'pinia'
import { v4 } from 'uuid';



export const useStore = defineStore({


  id: 'main',
  state: () => ({
    date: new Date(),
    // Load the item list from local storage or initialize as an empty array
    itemList: JSON.parse(localStorage.getItem('itemList') || '[]'),
    period: [] as string[],
  }),
  actions: {
    // Add an item to the list with date and id
    addItem(item: object) {
      const id = v4(); // Generate a unique ID
      this.itemList.push({id,...item, date: this.date.toISOString().split('T')[0]})
      // Update local storage
      this.updateLocalStorage();
    },
    // Delete an item from the item list
    deleteItem(idToDelete: string) {
      this.itemList = this.itemList.filter((item: any) => item.id !== idToDelete)
      // Update local storage
      this.updateLocalStorage();
    },

    // Update the local storage with the current item list
    updateLocalStorage() {
      localStorage.setItem('itemList', JSON.stringify(this.itemList));
    },
    // Populate the period array with the names of the past months
    populatePeriod(months: number = 6) {
      const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      const currentDate = new Date();

      for (let i = 0; i < months; i++) {
        const date = new Date(currentDate.getFullYear(), currentDate.getMonth() - i, 1);
        this.period.unshift(monthNames[date.getMonth()]);
      }
    }
  },
  getters: {
    // Calculate totals/current month quantity and amounts
    totalQuantity(): string {
      const total = this.itemList.reduce((total: number, item: any) => total + Number(item.quantity), 0);
      return total.toFixed(2);
    },
    totalAmount(): string {
      const total = this.itemList.reduce((total: number, item: any) => total + Number(item.total), 0);
      return total.toFixed(2);
    },
    totalQuantityCurrentMonth(): string {
      const currentMonth = new Date().getMonth();
      const currentYear = new Date().getFullYear();

      const total = this.itemList
        .filter((item: any) => {
          const itemDate = new Date(item.date);
          return itemDate.getMonth() === currentMonth && itemDate.getFullYear() === currentYear;
        })
        .reduce((total: number, item: any) => total + Number(item.quantity), 0);

      return total.toFixed(2);
    },
    totalAmountCurrentMonth(): string {
      const currentMonth = new Date().getMonth();
      const currentYear = new Date().getFullYear();

      const total = this.itemList
        .filter((item: any) => {
          const itemDate = new Date(item.date);
          return itemDate.getMonth() === currentMonth && itemDate.getFullYear() === currentYear;
        })
        .reduce((total: number, item: any) => total + Number(item.total), 0);

      return total.toFixed(2);
    },
    // Calculate the amounts per month    
    amountsPerMonth(): number[] {
      const currentMonth = new Date().getMonth();
      const currentYear = new Date().getFullYear();

      return Array.from({ length: 12 }, (_, i) => {
        const month = (currentMonth - i + 12) % 12;
        const year = currentYear - Math.floor((currentMonth - i) / 12);

        const itemsThisMonth = this.itemList.filter((item: any) => {
          const itemDate = new Date(item.date);
          return itemDate.getMonth() === month && itemDate.getFullYear() === year;
        });

        const totalAmount = itemsThisMonth.reduce((total: number, item: any) => total + Number(item.total), 0);

        return Number(totalAmount.toFixed(2));
      }).reverse();
    },
    // Calculate the quantities per month
    quantitiesPerMonth(): number[] {
      const currentMonth = new Date().getMonth();
      const currentYear = new Date().getFullYear();

      return Array.from({ length: 12 }, (_, i) => {
        const month = (currentMonth - i + 12) % 12;
        const year = currentYear - Math.floor((currentMonth - i) / 12);

        const itemsThisMonth = this.itemList.filter((item: any) => {
          const itemDate = new Date(item.date);
          return itemDate.getMonth() === month && itemDate.getFullYear() === year;
        });

        const totalQuantity = itemsThisMonth.reduce((total: number, item: any) => total + Number(item.quantity), 0);

        return Number(totalQuantity.toFixed(2));
      }).reverse();
    }



  },


})

