using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace superheroAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SuperheroController : ControllerBase
    {

        
        private readonly datacontext context;

        public SuperheroController(datacontext context)
        {
            this.context = context;
        }
        [HttpGet]
        public async Task<ActionResult<List<superhero>>> Get()
        {
            return Ok(await context.superhero.ToListAsync());
        }
        [HttpGet("{id}")]
        public async Task<ActionResult<superhero>> Get(int id)
        {
            var hero =await context.superhero.FindAsync(id);
            if (hero == null) return BadRequest("hero not found");
            return Ok(hero);
           
        }
        [HttpPost]
        public async Task<ActionResult<List<superhero>>> addHero(superhero hero)
        {
            
            context.superhero.Add(hero);
            await context.SaveChangesAsync();
            return Ok(await context.superhero.ToListAsync());
            
        }
        [HttpPut]
        public async Task<ActionResult<List<superhero>>> updateHero(superhero request)
        {
            
            var hero = await context.superhero.FindAsync(request.id);
            if (hero == null) return BadRequest("hero not found");
            hero.Name = request.Name;
            hero.FirstName = request.FirstName;
            hero.LastName = request.LastName;
            hero.Place = request.Place;
    
            await context.SaveChangesAsync();
            return Ok(await context.superhero.ToListAsync());
        }
        [HttpDelete("{id}")]
        public async Task<ActionResult<List<superhero>>> deletehero(int id)
        {
            var hero = await context.superhero.FindAsync(id);
            if (hero == null) return BadRequest("hero not found");
            context.superhero.Remove(hero);
            await context.SaveChangesAsync();

            return Ok(context.superhero.ToListAsync());

    }
}
}
