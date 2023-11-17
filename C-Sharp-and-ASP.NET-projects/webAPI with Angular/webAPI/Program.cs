using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.FileProviders;
using webAPI.Models;

var policyName = "_myAllowSpecificOrigins";
var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
builder.Services.AddDbContext<employeeDBContext>(options =>
{
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection"));
});

 


 
builder.Services.AddCors(p =>
{
    p.AddPolicy(name: policyName,
        builder =>
    {
        builder
    .WithOrigins("*")
    .AllowAnyMethod()
    .AllowAnyHeader();
    });
}) ;
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseStaticFiles(new StaticFileOptions {
    FileProvider = new PhysicalFileProvider(
        Path.Combine(Directory.GetCurrentDirectory(),"photos")),
        RequestPath = "/photos"
});

app.UseHttpsRedirection();

app.UseCors(policyName);

app.UseAuthorization();

app.MapControllers();

app.Run();
