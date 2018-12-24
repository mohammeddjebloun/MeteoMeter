
using Microsoft.EntityFrameworkCore; 
using System; 
using System.Collections.Generic; 
using System.Linq; 
using System.Threading.Tasks; 
using  MeteoMeter.Backend.Models;
using  MeteoMeter.Backend.DataModels;

namespace MeteoMeter.Backend.Repositories
{ 
    public class IdentifierRepository : Repository<Identifier>, IIdentifierRepository
    { 
		public IdentifierRepository(ApplicationDbContext context) : base(context)
        {
        }

        public IQueryable<Identifier> GetAllWithReferences()
        { 
            return DbContext.Set<Identifier>().AsNoTracking(); 
        }

		public async Task<Identifier> GetByIdWithReferences(int id)
        {
            return await DbContext.Set<Identifier>().FirstOrDefaultAsync(p=>p.Id == id);
        }
    } 
}