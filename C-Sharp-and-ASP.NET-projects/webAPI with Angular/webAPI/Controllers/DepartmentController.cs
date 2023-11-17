using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using webAPI.Models;

namespace webAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DepartmentController : ControllerBase
    {
        private readonly employeeDBContext context;

        public DepartmentController(employeeDBContext context)
        {
            this.context = context;
        }
        [HttpGet]
        public async Task<ActionResult<List<Department>>> Get()
        {
            return Ok(await context.Departments.ToListAsync());
        }

        [HttpPost]  
        public async Task<ActionResult<List<Department>>> addDep(Department Dep)
        {
     
            context.Departments.Add(Dep);
            await context.SaveChangesAsync();
            return Ok(await context.Departments.ToListAsync());
        }

        [HttpPut]
        public async Task<ActionResult<List<Department>>> updateDep(Department req)
        {
            var Dep = await context.Departments.FindAsync(req.DepartmentId);
            if (Dep == null) return BadRequest("Department not found");
            Dep.DepartmentName = req.DepartmentName;
            Dep.DepartmentId = req.DepartmentId;    
           await context.SaveChangesAsync();
            return Ok(await context.Departments.ToListAsync());
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<List<Department>>> deleteDep(int id)
        {
            var dept = await context.Departments.FindAsync(id);
            if (dept == null) return BadRequest("Department not found");
            context.Departments.Remove(dept);
            await context.SaveChangesAsync();
            return Ok(await context.Departments.ToListAsync());
        }
    }
}
