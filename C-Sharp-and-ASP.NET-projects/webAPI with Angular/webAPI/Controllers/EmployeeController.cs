using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using webAPI.Models;
using IHostingEnvironment = Microsoft.AspNetCore.Hosting.IHostingEnvironment;



namespace webAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {
        private readonly employeeDBContext context;
        private readonly IHostingEnvironment Env;

        public EmployeeController(employeeDBContext context, IHostingEnvironment _environment)
        {
            this.context = context;
            this.Env = _environment;
        }

        [HttpGet]
        public async Task<ActionResult<List<Employee>>> Get()
        {
            return Ok(await context.Employees.ToListAsync());
        }

        [HttpPost]
        public async Task<ActionResult<List<Employee>>> addEmp(Employee emp)
        {
            context.Employees.Add(emp);
            await context.SaveChangesAsync();
            return Ok(await context.Employees.ToListAsync());
        }

        [HttpPut]
        public async Task<ActionResult<List<Employee>>> Update(Employee req)
        {
            var emp = await context.Employees.FindAsync(req.EmployeeId);
            if (emp == null) return BadRequest("Employee not Found");
            emp.EmployeeId = req.EmployeeId;    
            emp.DateOfJoining = req.DateOfJoining;
            emp.EmployeeName = req.EmployeeName;
            emp.Photofilename = req.Photofilename;
            emp.Department = req.Department;

            await context.SaveChangesAsync();
            return Ok(await context.Employees.ToListAsync());
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<List<Employee>>> delete(int id)
        {
            var emp = await context.Employees.FindAsync(id);
            if (emp == null) return BadRequest("Employee not Found");
            context.Employees.Remove(emp);
            await context.SaveChangesAsync();
            return Ok(await context.Employees.ToListAsync());
        }

        [Route("SaveFile")]
        [HttpPost]
        public JsonResult SaveFile()
        {
            try
            {
                var httpRequest = Request.Form;
                var postedFile = httpRequest.Files[0];
                string filename = postedFile.FileName;
                var physicalPath = Env.ContentRootPath + "/photos/" + filename;

                using (var stream = new FileStream(physicalPath, FileMode.Create))
                {
                    postedFile.CopyTo(stream);
                }

                return new JsonResult(filename);
            }
            catch (Exception)
            {
                return new JsonResult("anonymous.png");
            }
        }

        [Route("GetAllDepartmentNames")]
        [HttpGet]
        public dynamic GetAllDepartmentNames()
        {
            return context.Employees
              .Select(x => new
              {
                  x.Department
              }).ToArray();
}

    }
}
