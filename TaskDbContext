public void ConfigureServices(IServiceCollection services)
{
    services.AddDbContext<TaskDbContext>(options =>
        options.UseSqlServer(Configuration.GetConnectionString("TaskDB")));
    services.AddControllers();
}

public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
{
    app.UseRouting();
    app.UseEndpoints(endpoints =>
    {
        endpoints.MapControllers();
    });
}