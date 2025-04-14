import './styles/global.css';
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem,SelectTrigger,SelectValue, } from "@/components/ui/select"
import { Button } from "@/components/ui/button"





export function App() {
  return (
    <div className='flex items-center justify-center h-screen w-full bg-zinc-100'>
      <div className='w-full max-w-xl bg-white shadow rounded-md p-8'>
        <h1 className='text-2xl font-bold text-center'>Registation</h1>
        <form className='mt-8 flex flex-col gap-6'>
          <div className='grid grid-cols-2 gap-4'>
            <div>
              <Label  className='m-1'>Firt Name</Label>
              <Input type='text'/>
            </div>
            <div>
              <Label  className='m-1'>Lirt Name</Label>
              <Input type='text'/>
            </div>
          </div>
          <div className='grid grid-cols-2 gap-4'>
            <div>
              <Label  className='m-1'>E-mail</Label>
              <Input type='email'/>
            </div>
            <div>
              <Label  className='m-1'>Company</Label>
              <Input type='text'/>
            </div>
          </div>
          <div className='grid grid-cols-3 gap-5 items-end'>
            <div>
                <Label  className='m-1'>Date of birth</Label>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Mouth" />
                  </SelectTrigger>
                  <SelectContent>
                    {Array(12).fill(1).map((_, index) => {
                      const value = String(index + 1).padStart(2, "0");
                      return (
                        <SelectItem id={String(index)} value={value}>{value}</SelectItem>
                      )
                    })}
                  </SelectContent>
                </Select>
              </div>
            <div>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Day" />
                </SelectTrigger>
                <SelectContent>
                  {Array(31).fill(1).map((_, index) => {
                    const value = String(index + 1).padStart(2, "0");
                    return (
                      <SelectItem id={String(index)} value={value}>{value}</SelectItem>
                    )
                  })}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Year" />
                </SelectTrigger>
                <SelectContent>
                  {Array(125).fill(1).map((_, index) => {
                    const value = String(index + 1901).padStart(2, "0");
                    return (
                      <SelectItem id={String(index)} value={value}>{value}</SelectItem>
                    )
                  })}
                </SelectContent>
              </Select>
            </div>
            </div>
          <Button className='mt-8' type='submit'>Register</Button>
        </form>
      </div>
    </div>
  )
}
