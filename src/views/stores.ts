import { defineStore } from 'pinia'
import { v4 } from 'uuid';



export const useStore = defineStore({


  id: 'main',
  state: () => ({
    date: new Date(),
    itemList: JSON.parse(localStorage.getItem('itemList') || '[]'),
    period: [] as string[],
  }),
  actions: {
    addItem(item: object) {
      const id = v4(); // Generate a unique ID
      this.itemList.push({id,...item, date: this.date.toISOString().split('T')[0]})
      this.updateLocalStorage();
    },
    deleteItem(idToDelete: string) {
      this.itemList = this.itemList.filter((item: any) => item.id !== idToDelete)
      this.updateLocalStorage();
    },



    updateLocalStorage() {
      localStorage.setItem('itemList', JSON.stringify(this.itemList));
    },
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

